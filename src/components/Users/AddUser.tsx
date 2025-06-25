import { useState } from "react";
import FormInput from "../Forms_Buttons/FormInput";
import FormSelect from "../Forms_Buttons/FormSelect";
import type { User, AddUserProps } from "../../types/User";
import Button from "../Forms_Buttons/Button";

const AddUser = ({ onAddUser }: AddUserProps) => {
  const [newUserForm, setNewUserForm] = useState({
    f_name: "",
    l_name: "",
    gender: "",
    age: "",
    role: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewUserForm({ ...newUserForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: User = {
      id: Date.now(),
      f_name: newUserForm.f_name,
      l_name: newUserForm.l_name,
      gender: newUserForm.gender,
      age: Number(newUserForm.age),
      role: newUserForm.role,
      email: newUserForm.email,
    };

    onAddUser(newUser);

    setNewUserForm({
      f_name: "",
      l_name: "",
      gender: "",
      age: "",
      role: "",
      email: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 sm:space-y-8 text-sm sm:text-base"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 border-b pb-2">
        Add New User
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <FormInput
          name="f_name"
          label="First Name"
          placeholder="John"
          value={newUserForm.f_name}
          onChange={handleChange}
          required
        />
        <FormInput
          name="l_name"
          label="Last Name"
          placeholder="Doe"
          value={newUserForm.l_name}
          onChange={handleChange}
          required
        />
        <FormSelect
          name="gender"
          label="Gender"
          value={newUserForm.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </FormSelect>
        <FormInput
          name="age"
          label="Age"
          type="number"
          placeholder="30"
          value={newUserForm.age}
          onChange={handleChange}
          required
        />
        <FormInput
          name="role"
          label="Role"
          placeholder="Developer"
          value={newUserForm.role}
          onChange={handleChange}
          required
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          placeholder="john@gmail.com"
          value={newUserForm.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Button type="submit" className="w-full">Add User</Button>
      </div>
    </form>
  );
};

export default AddUser;
