import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"; 
import { Input } from "../components/ui/Input";
import { PasswordInput } from "../components/ui/PasswordInput";
import { Textarea } from "../components/ui/Textarea";
import { Select } from "../components/ui/Select";
import { Button } from "../components/ui/Button";


const registerSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Minimal 8 karakter"),
  bio: z.string().optional(),
  event: z.string().min(1, "Pilih salah satu event"),
});



export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(registerSchema) 
  });

  const onSubmit = (data: any) => {
    console.log("Submit Data:", data); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input 
        label="Nama" 
        name="name" 
        register={register} 
        error={errors.name?.message as string} 
        placeholder="Nama"
      />
      <Input 
        label="Email" 
        name="email" 
        register={register} 
        error={errors.email?.message as string} 
        placeholder="Email"
      />
      <PasswordInput 
        label="Password" 
        name="password" 
        register={register} 
        error={errors.password?.message as string}
        placeholder="Password"
      />
      <Textarea 
        label="Bio" 
        name="bio" 
        register={register} 
        placeholder="Bio"
      />
      <Select 
        label="Event" 
        name="event" 
        register={register} 
        error={errors.event?.message as string}
        options={[
          { label: "Workshop", value: "Workshop" },
          { label: "Seminar", value: "Seminar" },
          { label: "IT Competition", value: "IT Competition" }
        ]}
      />
      <Button type="submit" label="Daftar" isLoading={isSubmitting} />
    </form>
  );
}