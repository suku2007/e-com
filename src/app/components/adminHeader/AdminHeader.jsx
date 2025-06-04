function AdminHeader(){
    return (
        <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">Admin Panel</div>

        <nav className="flex items-center gap-6">
            <a href="/admin/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</a>
            <a href="/admin/users" className="text-gray-600 hover:text-blue-600">Users</a>
            <a href="/admin/settings" className="text-gray-600 hover:text-blue-600">Settings</a>
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            Logout
            </button>
        </nav>
        </header>
    );
    }

export default AdminHeader;