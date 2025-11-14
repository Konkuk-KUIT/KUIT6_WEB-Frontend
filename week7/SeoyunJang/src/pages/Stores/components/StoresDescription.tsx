const Description = () => {
  const info = [
    { label: "결제방법", value: "토스결제만 현장결제 안됨" },
    { label: "최소주문", value: "13,000원" },
    { label: "배달시간", value: "약 15-25분" },
  ];

  return (
    <div className="flex flex-col px-[24px] py-[14px] gap-[20px]">
      <section className="flex gap-[5px]">
        <img src="/star.svg" alt="star" />
        <h3 className="flex gap-[9px]">
          <span>4.9</span>
          <span>리뷰3,919</span>
        </h3>
      </section>

      <section className="flex flex-col gap-[10px] text-[15px] text-[#4E5968]">
        {info.map((item) => (
          <div key={item.label} className="flex gap-[12px]">
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Description;
