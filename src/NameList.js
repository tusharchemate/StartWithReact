import Person from "./Person";

const NameList = () => {
  const persons = [
    {
      id: 1,
      name: "Tushar",
      age: 25,
      skill: "React",
    },
    {
      id: 2,
      name: "Ketan",
      age: 25,
      skill: "Angular",
    },
  ];
  const personList = persons?.map((item) => <Person person={item}></Person>);

  return <div>{personList}</div>;
};

export default NameList;
