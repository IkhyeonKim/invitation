const ToastMessage = ({ message }: { message: string }) => {
  return (
    <div className="fixed w-full z-[9999] bottom-[5%] left-0 flex items-center justify-center">
      <div className="flex px-6 py-2 text-white shadow-md bg-color-1 shadow-slate-600 rounded-3xl">{message}</div>
    </div>
  );
};

export default ToastMessage;
