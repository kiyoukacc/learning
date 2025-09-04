import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Dashboard({ auth, karyawans = [] }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        nama: "",
        id_pekerja: "",
        jabatan: "",
        email: "",
        umur: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("karyawan.store"), {
            onSuccess: () => {
                alert("Karyawan berhasil ditambahkan!");
                reset();
            },
            onError: () => {
                alert("Gagal menambahkan karyawan!");
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Panel login */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-8">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>

                    {/* Form tambah karyawan */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-8">
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">
                                Tambah Karyawan
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 mb-1">
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        name="nama"
                                        value={data.nama}
                                        onChange={(e) =>
                                            setData("nama", e.target.value)
                                        }
                                        className="w-full border rounded px-3 py-2"
                                        required
                                    />
                                    {errors.nama && (
                                        <p className="text-red-500 text-sm">
                                            {errors.nama}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-1">
                                        ID Pekerja
                                    </label>
                                    <input
                                        type="text"
                                        name="id_pekerja"
                                        value={data.id_pekerja}
                                        onChange={(e) =>
                                            setData(
                                                "id_pekerja",
                                                e.target.value
                                            )
                                        }
                                        className="w-full border rounded px-3 py-2"
                                        required
                                    />
                                    {errors.id_pekerja && (
                                        <p className="text-red-500 text-sm">
                                            {errors.id_pekerja}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-1">
                                        Jabatan
                                    </label>
                                    <input
                                        type="text"
                                        name="jabatan"
                                        value={data.jabatan}
                                        onChange={(e) =>
                                            setData("jabatan", e.target.value)
                                        }
                                        className="w-full border rounded px-3 py-2"
                                        required
                                    />
                                    {errors.jabatan && (
                                        <p className="text-red-500 text-sm">
                                            {errors.jabatan}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="w-full border rounded px-3 py-2"
                                        required
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-1">
                                        Umur
                                    </label>
                                    <input
                                        type="number"
                                        name="umur"
                                        value={data.umur}
                                        onChange={(e) =>
                                            setData("umur", e.target.value)
                                        }
                                        className="w-full border rounded px-3 py-2"
                                        required
                                    />
                                    {errors.umur && (
                                        <p className="text-red-500 text-sm">
                                            {errors.umur}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-50"
                                >
                                    {processing
                                        ? "Menyimpan..."
                                        : "Tambah Karyawan"}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Tabel data karyawan */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">
                                Data Karyawan
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border px-4 py-2">
                                                No
                                            </th>
                                            <th className="border px-4 py-2">
                                                Nama
                                            </th>
                                            <th className="border px-4 py-2">
                                                ID Pekerja
                                            </th>
                                            <th className="border px-4 py-2">
                                                Jabatan
                                            </th>
                                            <th className="border px-4 py-2">
                                                Email
                                            </th>
                                            <th className="border px-4 py-2">
                                                Umur
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {karyawans.length === 0 ? (
                                            <tr>
                                                <td
                                                    colSpan={6}
                                                    className="text-center py-4"
                                                >
                                                    Belum ada data karyawan.
                                                </td>
                                            </tr>
                                        ) : (
                                            karyawans.map((karyawan, idx) => (
                                                <tr key={karyawan.id}>
                                                    <td className="border px-4 py-2">
                                                        {idx + 1}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {karyawan.nama}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {karyawan.id_pekerja}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {karyawan.jabatan}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {karyawan.email}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {karyawan.umur}
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
