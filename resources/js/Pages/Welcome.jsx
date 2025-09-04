import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Company Profile" />
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                {/* Navbar */}
                <nav className="flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-800 shadow">
                    <div className="flex items-center gap-2">
                        <svg
                            className="h-8 w-8 text-red-500"
                            viewBox="0 0 62 65"
                            fill="none"
                        >
                            {/* ...logo path... */}
                            <path
                                d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253Z"
                                fill="#FF2D20"
                            />
                        </svg>
                        <span className="font-bold text-xl text-gray-800 dark:text-white">
                            Magang Company
                        </span>
                    </div>
                    <div>
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="text-red-500 font-semibold"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="text-gray-700 dark:text-gray-300 font-semibold mx-2"
                                >
                                    Login
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="text-red-500 font-semibold mx-2"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center py-16 bg-gradient-to-br from-red-100 to-red-300 dark:from-gray-800 dark:to-gray-900">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                        Selamat Datang di Magang Company
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl text-center mb-6">
                        Kami adalah perusahaan teknologi yang berfokus pada
                        pengembangan solusi digital inovatif untuk bisnis Anda.
                    </p>
                    <Link
                        href="#contact"
                        className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold shadow hover:bg-red-600 transition"
                    >
                        Hubungi Kami
                    </Link>
                </section>

                {/* About Section */}
                <section className="max-w-5xl mx-auto py-16 px-6">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                        Tentang Kami
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Magang Company berdiri sejak 2020 dan telah membantu
                        puluhan klien dalam membangun aplikasi web, mobile, dan
                        sistem informasi. Kami memiliki tim profesional yang
                        siap mendukung kebutuhan digital Anda.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
                            <h3 className="font-semibold text-xl mb-2 text-red-500">
                                Visi
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Menjadi mitra utama dalam transformasi digital
                                di Indonesia.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
                            <h3 className="font-semibold text-xl mb-2 text-red-500">
                                Misi
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Memberikan solusi teknologi yang inovatif,
                                efektif, dan berkelanjutan.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
                            <h3 className="font-semibold text-xl mb-2 text-red-500">
                                Nilai
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Profesional, Inovatif, Kolaboratif, dan
                                Berorientasi Hasil.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="bg-gray-50 dark:bg-gray-800 py-16 px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                            Layanan Kami
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 text-center">
                                <h3 className="font-semibold text-lg mb-2 text-red-500">
                                    Pengembangan Website
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Membangun website profesional sesuai
                                    kebutuhan bisnis Anda.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 text-center">
                                <h3 className="font-semibold text-lg mb-2 text-red-500">
                                    Aplikasi Mobile
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Solusi aplikasi Android & iOS untuk
                                    memperluas jangkauan bisnis.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 text-center">
                                <h3 className="font-semibold text-lg mb-2 text-red-500">
                                    Sistem Informasi
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Integrasi dan otomasi proses bisnis melalui
                                    sistem informasi.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="max-w-5xl mx-auto py-16 px-6">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                        Kontak Kami
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Ingin konsultasi atau bekerja sama? Silakan hubungi kami
                        melalui email atau WhatsApp berikut:
                    </p>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex-1">
                            <h3 className="font-semibold text-lg mb-2 text-red-500">
                                Email
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                info@magangcompany.com
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex-1">
                            <h3 className="font-semibold text-lg mb-2 text-red-500">
                                WhatsApp
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                +62 812-3456-7890
                            </p>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-white dark:bg-gray-900 py-6 text-center text-gray-500 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} Magang Company. All rights
                    reserved.
                </footer>
            </div>
        </>
    );
}
