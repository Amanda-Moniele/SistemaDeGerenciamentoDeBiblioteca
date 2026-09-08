function Input ({label, placeholder, type, value}) {
    return (
        <div className="flex flex-col mb-5 w-full">
            <label htmlFor="" className="text-lg">{label}</label>
            <input className="border border-bege h-10 rounded-lg outline-none px-2" value={value} type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input