export const CatInfo = ({ cat: { breeds, url } }) => {
  const { description, name, temperament } = breeds[0];
  return (
    <div>
      <img src={url} alt="" width="320" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <b>Temperament:</b> {temperament}
      </p>
    </div>
  );
};
