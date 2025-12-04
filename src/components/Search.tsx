export  const Search = ()=>{
    return(
    <div className="search bg-green-700 pt-5 pb-5">
   <div className="search__wrapper flex justify-center">
    <form className=" search__form  ">
        <input
            type="search"
            className=" w-100 h-10 m-0 block  flex-auto rounded  border  border-solid border-green-700 bg-red-50  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
            placeholder="&#128270; Найти пост"
            aria-label="Search"
            id="exampleFormControlInput2"
            aria-describedby="button-addon2" />
            </form>
    </div>
</div>
    )
}