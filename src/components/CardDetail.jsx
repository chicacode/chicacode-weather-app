

const CardDetail = ({ data }) => {
  return (
    <div>
      <div
        class="mb-4 rounded-lg bg-primary-light px-6 py-5 text-base text-primary font-medium"
        role="alert"
      >
        <div className="flex justify-start">
          <span>{data?.name}</span>
          <span  className="mx-2">{data?.region},</span>
          <span className="font-bold">{data?.country}</span>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
