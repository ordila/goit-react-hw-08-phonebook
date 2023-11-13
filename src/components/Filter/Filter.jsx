import css from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <h2 className={`${css.subTitle} ${css.filter}`}>Filter</h2>
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
        placeholder="Please enter a name to search"
      ></input>
    </>
  );
};
export default Filter;
