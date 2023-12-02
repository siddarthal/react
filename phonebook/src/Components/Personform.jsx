const Personform = ({name,number,nameHandler,phoneHandler,submitHandler}) => {
  return (
    <form action="" onSubmit={submitHandler}>
      <label>Name: </label>
      <input type="text" name="name" value={name} onChange={nameHandler} />
      <br />
      <br />
      <label>Phone: </label>
      <input name="phone" value={number} onChange={phoneHandler} />
      <br />
      <br />
      <button type="submit">submit</button>
      <br />
    </form>
  );
};
export default Personform;
