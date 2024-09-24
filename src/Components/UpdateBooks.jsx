import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateBooks = () => {
    const loadedBooks = useLoaderData();
    const handleUpdateBook = event => {
        event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const author = form.author.value;
    const publish = form.publish.value;
    const genre = form.genre.value;
    const price = form.price.value;
    const page = form.page.value;
    const photo = form.photo.value;
    const updatedBook = {name , author, publish, genre, price, page, photo};
    console.log(updatedBook);

    fetch(`http://localhost:5000/books/${_id}`, {
        method:"PUT",
        headers:{
            "content-type": "application/json"
        },
        body:JSON.stringify(updatedBook)

    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount > 0){
            Swal.fire({
                title: 'Success!',
                text: 'Book Updated successfully',
                icon: 'success',
                confirmButtonText: 'Close'
              })
        }
    })
    }

   
    const { _id, name, photo, author, page, publish, price, genre } = loadedBooks;

    return (
        <div>
            <h2 className="text-5xl font-bold text-pink-600 my-20">Update Books</h2>
            <form onSubmit={handleUpdateBook} className="bg-pink-300 p-20 rounded-3xl">
                <h1 className="text-4xl font-bold mb-10 text-pink-950">Update Book : {name}</h1>
                <div className=" grid md:grid-cols-2 gap-10" >
                    <div className="space-y-3 text-black">
                        <label className="label">
                            <span className="font-semibold text-lg text-pink-950">Book Name</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-pink-50 font-semibold">
                            <input type="text" defaultValue={name} name="name" className="w-full " placeholder="Book Name" />
                        </label>

                        <label className="label">
                            <span className="font-semibold text-lg text-pink-950">Author Name</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-pink-50 font-semibold">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" defaultValue={author} className="" name="author" placeholder="Author Name" />
                        </label>
                        <label className="label">
                            <span className="font-semibold text-lg text-pink-950">Publish Year</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-pink-50 font-semibold">
                            <input type="number" defaultValue={publish} name="publish" className="w-full" placeholder="Publised Year" />
                        </label>
                    </div>
                    <div className="space-y-3 text-black">
                        <label className="label">
                            <span className="font-semibold text-lg text-pink-950">Genre</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-pink-50 font-semibold">
                            <input type="text" defaultValue={genre} name="genre" className="w-full" placeholder="Genre" />
                        </label>

                        <label className="label">
                            <span className="font-semibold text-lg text-pink-950">Price</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-pink-50 font-semibold">
                            <input type="number" defaultValue={price} name="price" className="w-full" placeholder="Price" />
                        </label>
                        <label className="label">
                            <span className="font-semibold text-lg text-pink-950">Page Count</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-pink-50 font-semibold">
                            <input type="number" defaultValue={page} name="page" className="w-full" placeholder="Page Count" />
                        </label>
                    </div>
                </div>
                <div className="my-5">
                    <label className="label">
                        <span className="font-semibold text-lg text-pink-950">Photo URL</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2 bg-pink-50 font-semibold">
                        <input type="text" defaultValue={photo} name="photo" className="w-full" placeholder="Photo URL" />
                    </label>

                    <input className="btn w-full my-4 bg-pink-700 text-black text-lg hover:text-white" type="submit" value="Update Book" />
                </div>
            </form>
        </div>
    );
};

export default UpdateBooks;