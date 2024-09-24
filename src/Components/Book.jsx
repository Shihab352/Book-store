/* eslint-disable react/prop-types */
import { FaEye, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Book = ({ book , books, setBooks }) => {

    const { _id, name, photo, author, page, publish, price, genre } = book;

    const handleDelete = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/books/${id}`, {
                
                method:"DELETE"

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = books.filter (bok => bok._id !== id);
                            setBooks(remaining);
                        }
                    })

            }
        });
    }

    return (
        <div>
            <div className="card bg-pink-300 w-96  shadow-xl">
                <figure className=" pt-5">
                    <img
                        src={photo}
                        alt="Shoes"
                        className="rounded-xl w-[300px] h-[300px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-pink-950 ">{name}</h2>
                    <p className="text-pink-950 text-lg"> <span className="font-bold">Author :</span> {author} </p>
                    <p className="text-pink-950 text-lg"> <span className="font-bold">Publish Year :</span> {publish} </p>
                    <p className="text-pink-950 text-lg"> <span className="font-bold">Genere :</span> {genre} </p>
                    <p className="text-pink-950 text-lg"> <span className="font-bold">Price :</span>${price} </p>
                    <p className="text-pink-950 text-lg"> <span className="font-bold">Page :</span> {page} </p>
                    <div className="card-actions mt-5">
                        <button className="btn text-lg text-white bg-pink-500"><FaEye /></button>
                        <Link to={`/updateBooks/${_id}`}><button className="btn text-lg text-white bg-green-800"><FaEdit /></button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn text-lg text-white bg-red-800"><MdDelete /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;