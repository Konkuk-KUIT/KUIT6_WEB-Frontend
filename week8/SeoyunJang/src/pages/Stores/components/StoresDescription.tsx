interface DescriptionProps {
  rating: number;
  reviewCount: number;
  payment: string;
  minOrder: string;
  deliveryTime: string;
}

const Description = ({
  rating,
  reviewCount,
  payment,
  minOrder,
  deliveryTime,
}: DescriptionProps) => {
  const info = [
    { label: "결제방법", value: payment },
    { label: "최소주문", value: minOrder },
    { label: "배달시간", value: deliveryTime },
  ];

  return (
    <div className="flex flex-col px-[24px] py-[14px] gap-[20px]">
      <section className="flex gap-[5px]">
        <img src="/star.svg" alt="star" />
        <h3 className="flex gap-[9px]">
          <span>{rating}</span>
          <span>리뷰 {reviewCount.toLocaleString()}</span>
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
