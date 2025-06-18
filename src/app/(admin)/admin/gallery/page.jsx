function page(){
    return(
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Gallery List</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Add New Image
                </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <img src="/images/sunset.jpg" alt="Sunset" className="w-full h-48 object-cover" />
                    <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">Beach Sunset</h2>
                    <p className="text-sm mt-1 text-green-600">Active</p>
                    <div className="flex gap-4 mt-4">
                        <button className="text-blue-600 hover:underline text-sm">Edit</button>
                        <button className="text-red-600 hover:underline text-sm">Delete</button>
                    </div>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <img src="/images/mountain.jpg" alt="Mountain" className="w-full h-48 object-cover" />
                    <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">Mountain Hike</h2>
                    <p className="text-sm mt-1 text-red-500">Inactive</p>
                    <div className="flex gap-4 mt-4">
                        <button className="text-blue-600 hover:underline text-sm">Edit</button>
                        <button className="text-red-600 hover:underline text-sm">Delete</button>
                    </div>
                    </div>
                </div>

                </div>
            </div>
            </div>

    );
}
export default page;