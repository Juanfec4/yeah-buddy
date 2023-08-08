import useStore from "../../store/useStore";
import SelectInput from "../ui/inputs/selectInput";
import TextInput from "../ui/inputs/textInput";
import { useMemo, useEffect, useState } from "react";
import "./styles.scss";
const Filter = ({ handleSearch, handleFilterCategory, handleFilterBodyPart }) => {
  const { categories, bodyParts, fetchCategories, fetchBodyParts } = useStore((state) => state);
  const [selectedBodyPart, setSelectedBodyPart] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetchCategories();
    fetchBodyParts();
  }, []);

  const search = (e) => {
    setSelectedCategory("");
    setSelectedBodyPart("");
    setSearchTerm(e.target.value);
  };

  const filterByCategory = (data) => {
    handleFilterCategory(data);
    if (selectedBodyPart) {
      setSelectedBodyPart("");
    }
    setSearchTerm("");
    setSelectedCategory(data);
  };

  const filterByBodyPart = (data) => {
    handleFilterBodyPart(data);
    if (selectedCategory) {
      setSelectedCategory("");
    }
    setSearchTerm("");
    setSelectedBodyPart(data);
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  const categoryList = useMemo(() => {
    if (categories.data) {
      return categories.data.map((category) => {
        return { value: category._id, text: category.name };
      });
    }
  }, [categories.data]);

  const bodyPartList = useMemo(() => {
    if (bodyParts.data) {
      return bodyParts.data.map((bodyPart) => {
        return { value: bodyPart._id, text: bodyPart.name };
      });
    }
  }, [bodyParts.data]);

  return (
    <div className="filter-container">
      <TextInput
        placeholder={"Search"}
        label={"Search for exercise:"}
        value={searchTerm}
        id={"search-box"}
        handleChange={search}
      />
      <SelectInput
        label={"Filter muscle group:"}
        options={bodyPartList}
        handleChange={filterByBodyPart}
        selected={selectedBodyPart}
        id={"select-body-part"}
      />
      <SelectInput
        label={"Filter category:"}
        options={categoryList}
        handleChange={filterByCategory}
        selected={selectedCategory}
        id={"select-category"}
      />
    </div>
  );
};

export default Filter;
