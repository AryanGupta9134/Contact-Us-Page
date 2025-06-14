const MainDown = () => {
  return (
    <div className="flex h-6/10">
      {/* left */}
      <div className="h-full w-5/10 flex p-4">
        <div className="w-3/5 ml-35">
          <div className="flex gap-5">
            <div className="flex bg-black p-1 text-sm justify-center items-center w-60 gap-2 rounded-lg">
              <div>
                <img
                  src="/public/Images/message_logo.png"
                  alt=""
                />
              </div>
              <button className="text-white font-bold ">
                VIA SUPPORT CHAT
              </button>
            </div>
            <div className="flex bg-black p-1 text-sm justify-center items-center w-60 gap-2 rounded-lg">
              <div>
                <img src="/public/Images/Call_logo.png" alt="" />
              </div>
              <button className="text-white font-bold ">VIA CALL</button>
            </div>
          </div>
          <div className="flex border p-1 text-sm justify-center items-center w-full gap-2 mt-2 rounded-lg">
            <div>
              <img
                src="/public/Images/black_message_logo.png"
                alt=""
                className="mt-1"
              />
            </div>
            <button className="text-black font-bold ">VIA EMAIL FORM</button>
          </div>
          <div className="p-3">
            <div>
              <input type="text" className="border p-1 pl-4 w-full rounded-md" placeholder="Name here.. "/>
            </div>
            <div className="mt-5">
              <input type="email" className="border p-1 pl-4 w-full rounded-md" placeholder="Email here.. "/>
            </div>
            <div className="mt-5">
              <textarea placeholder="Description here..." className="border w-full h-30 p-1 pl-4 rounded-md"></textarea>
            </div>
            <div className="flex flex-row-reverse mt-2">
                <button type="submit"className="p-1 w-25 bg-black text-white font-bold rounded-lg">Submit</button>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-5/10 h-full">
        <img
          src="/public/Images/Service_image.svg"
          alt="bg-image"
          className="h-full"
        />
      </div>
    </div>
  );
};

export default MainDown;
