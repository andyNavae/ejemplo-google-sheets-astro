const URL = import.meta.env.DB_URL;

export async function getBooks() {

    const res = await fetch(URL);
    const data = await res.text();

    const books = data.split('\n').slice(1).map(book =>{
        const [title, author,description, tags, image] = book.split(',');
        return {
            title,
            author,
            description,
            tags,
            image,
        };
    })
    
    return books

}