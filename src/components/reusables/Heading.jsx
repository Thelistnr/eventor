const Heading = ({name, filter}) => {
    return ( 
        <>
            <h1 className="text-4xl font-semibold text-gray-800 tracking-tight mb-6 transition-all duration-300 ease-in-out hover:text-blue-600 hover:scale-105">
                {name} {filter && <span className="text-sm font-normal text-blue-500">Filter- {filter.category}</span>}
            </h1>
        </>
     );
}
 
export default Heading;