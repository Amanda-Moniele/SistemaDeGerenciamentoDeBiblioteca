function Input ({label, placeholder, type}) {
    return (
        <div className="flex flex-col mb-5 w-full">
            <label htmlFor="" className="text-lg">{label}</label>
            <input className="border border-bege h-10 rounded-lg outline-none px-2" type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input