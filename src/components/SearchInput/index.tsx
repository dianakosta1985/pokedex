import styles from "./styles.module.scss";

type SearchInputProps = {
  value: string;
  onSearch: (value: string) => void;
};

export default function SearchInput({ value, onSearch }: SearchInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className={styles.inputWrapper}>
      <img
        src="/icons/search.svg"
        width={18}
        alt="search"
        className={styles.searchIcon}
      />
      <input
        type="text"
        value={value}
        className={styles.inputField}
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
}
