
const FormBox = () => {
    return (
        <div className='border w-96 p-12 rounded-md'>
            <h3 className='text-5xl font-bold text-green-500 text-center'>Todos</h3>
            <form className="my-8 flex space-x-2">
                <input placeholder="Todos" type="text" className="border w-full p-2 rounded-md outline-none"/>
                <input className="bg-orange-500 p-2 rounded-md text-xl cursor-pointer" type="submit" value="Add"/>
            </form>
        </div>
    );
};

export default FormBox;