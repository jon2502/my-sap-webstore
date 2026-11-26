const page = () => {

  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <form>
            <div>
                <label htmlFor="username">User Name</label>
                <input id="username" name="username" placeholder="Name" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
            </div>
            <button type="submit">Create User</button>
        </form>
    </div>
  );
}
export default page