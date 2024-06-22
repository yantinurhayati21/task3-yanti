import { useState } from "react";
import { Plus, Edit, Trash2, CheckCircle, XCircle } from "lucide-react";

export default function Home() {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [newStudent, setNewStudent] = useState({
    Id: "",
    nama: "",
    generation: "",
  });
  const [student, setStudent] = useState([
    {
      Id: 1,
      nama: "Arya",
      generation: 21,
    },
    {
      Id: 2,
      nama: "Yanti",
      generation: 21,
    },
    {
      Id: 3,
      nama: "Anisa",
      generation: 21,
    },
    {
      Id: 4,
      nama: "Susi",
      generation: 21,
    },
    {
      Id: 5,
      nama: "Aisyah",
      generation: 21,
    },
  ]);

  function handleShowEdit(student) {
    setNewStudent(student);
    setShowEdit(!showEdit);
  }

  function handleAdd(event) {
    event.preventDefault();
    const Id = event.target.Id.value;
    const nama = event.target.nama.value;
    const generation = event.target.generation.value;
    setStudent([
      ...student,
      {
        Id: Id,
        nama: nama,
        generation: generation,
      },
    ]);
    setShowAdd(false);
  }

  function handleChange(event) {
    setNewStudent({ ...newStudent, [event.target.name]: event.target.value });
  }

  function handleEdit(event) {
    event.preventDefault();
    const temp = student.map((stud) =>
      stud.Id === newStudent.Id ? newStudent : stud
    );
    setStudent(temp);
    setNewStudent({ Id: "", nama: "", generation: "" });
    setShowEdit(false);
  }

  function handleDelete(studentToDelete) {
    const confirmation = window.confirm(
      `Apakah Anda yakin ingin menghapus siswa ${studentToDelete.nama}?`
    );
    if (confirmation) {
      setStudent(student.filter((item) => item.Id !== studentToDelete.Id));
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 to-gray-300 flex items-center justify-center py-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-lg w-full transform transition-all duration-300 ease-in-out">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Student List
        </h1>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="w-full mb-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center justify-center space-x-2 transform transition-transform duration-300 hover:scale-105"
        >
          <Plus size={18} />
          <span>Tambah</span>
        </button>

        {showEdit && (
          <form
            className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md"
            onSubmit={handleEdit}
          >
            <div className="mb-2">
              <label htmlFor="nama" className="block text-gray-700">
                Input Nama
              </label>
              <input
                type="text"
                name="nama"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                onChange={handleChange}
                value={newStudent.nama}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="generation" className="block text-gray-700">
                Input Angkatan
              </label>
              <input
                type="text"
                name="generation"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                onChange={handleChange}
                value={newStudent.generation}
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105"
              >
                <CheckCircle size={18} />
                <span>Submit</span>
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105"
                onClick={() => setShowEdit(false)}
              >
                <XCircle size={18} />
                <span>Cancel</span>
              </button>
            </div>
          </form>
        )}

        {showAdd && (
          <form
            className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md"
            onSubmit={handleAdd}
          >
            <div className="mb-2">
              <label htmlFor="Id" className="block text-gray-700">
                Input Id
              </label>
              <input
                type="text"
                name="Id"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="nama" className="block text-gray-700">
                Input Nama
              </label>
              <input
                type="text"
                name="nama"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="generation" className="block text-gray-700">
                Input Angkatan
              </label>
              <input
                type="text"
                name="generation"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105"
              >
                <CheckCircle size={18} />
                <span>Submit</span>
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105"
                onClick={() => setShowAdd(false)}
              >
                <XCircle size={18} />
                <span>Cancel</span>
              </button>
            </div>
          </form>
        )}

        {student.map((stud) => (
          <div
            key={stud.Id}
            className="bg-white rounded-lg p-4 mb-4 shadow-lg hover:shadow-xl transform transition-shadow duration-300"
          >
            <div className="text-lg font-semibold text-gray-700">
              {stud.nama}
            </div>
            <div className="text-gray-600">Generation: {stud.generation}</div>
            <div className="mt-4 flex space-x-2">
              <button
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transform transition-transform duration-300 hover:scale-105"
                onClick={() => handleShowEdit(stud)}
              >
                <Edit size={18} className="mr-2" />
                Edit
              </button>

              <button
                className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transform transition-transform duration-300 hover:scale-105"
                onClick={() => handleDelete(stud)}
              >
                <Trash2 size={18} className="mr-2" />
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
