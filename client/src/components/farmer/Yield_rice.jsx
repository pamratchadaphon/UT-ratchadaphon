const Yield_rice = () => {
  return (
    <div className="bg-white p-4 border rounded-lg w-full md:w-1/2">
      <div className="rounded-lg text-gray-900">
        <div className="mb-3">
          <span>ผลผลิต</span>
        </div>
        <hr />
        <div className="flex justify-between mt-3">
          <span>น้ำหนักสุทธิ </span>
          <span>1,000 กก.</span>
        </div>
        <div className="flex justify-between pb-3">
          <span>ราคา/กก.</span>
          <span> 150 บาท</span>
        </div>
        <div className="flex justify-between border-t  py-2">
          <span>จำนวนเงิน </span>
          <span>150,000 บาท</span>
        </div>
      </div>
    </div>
  );
};

export default Yield_rice;
