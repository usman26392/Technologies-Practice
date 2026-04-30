import { useState, useEffect, type ChangeEvent, type SubmitEvent } from "react";
import { useCreateFormMutation } from "../services/form-slice";
import z from "zod";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

interface IForm {
  name: string;
  email: string;
  message: string;
}

export const ContactSchema = z.object({
  name: z
    .string()
    .trim() // ignores spaces
    .min(1, "Name is required"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required") // Shows this if empty
    .email("Invalid email format"), // Shows this if they type "abc"
  message: z.string().trim().min(1, "Message is required"),
});

// Component for Form
export default function ContactForm() {
  const [newForm, setNewForm] = useState<IForm>({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState<any[] | null>([]);
  const [
    createForm,
    { data, error: resError, isError, isLoading, isSuccess, reset },
  ] = useCreateFormMutation();

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        reset();
      }, 3000); // Clear after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isSuccess, reset]);

  function handleInputFieldChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    if (isSuccess || isError) {
      reset();
    }
    const { name, value } = e.target;
    setNewForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  async function handleFormSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      // 1. Validate data directly
      const validatedForm = ContactSchema.parse(newForm);
      setError([]); // Clear previous errors

      // 2. Submit the validated data directly to the API
      await createForm(validatedForm).unwrap();

      // 3. Reset form on success
      setNewForm({
        name: "",
        email: "",
        message: "",
      });
      // console.log("Form submitted successfully!");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.issues);
      } else {
        console.error("Submission failed:", err);
      }
    }
  }

  // console.log("resError", resError?.data?.message);
  // console.log("is Error", isError);

  // for fixing type error for resError
  const serverError = resError as FetchBaseQueryError;
  const errorMessage = (serverError?.data as { message: string })?.message;

  console.log("RTQ isSuccess", isSuccess);

  console.log("zod errors", error);

  return (
    <div className="card bg-base-200 shadow-xl max-w-md mx-auto mt-20">
      <div className="card-body">
        <h1 className="card-title text-2xl font-bold mb-4">
          Get in touch with MERN stack!
        </h1>
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-4">
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full"
                name="name"
                value={newForm.name}
                onChange={handleInputFieldChange}
              />
              {error?.map((err, i) => {
                if (err.path.includes("name")) {
                  return (
                    <p key={i} className="text-red-500 text-xs mt-1 text-left">
                      {err.message}
                    </p>
                  );
                }
              })}
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                name="email"
                value={newForm.email}
                onChange={handleInputFieldChange}
              />
              {/* {
                                error?.map((err, i) => {
                                    if (err.path.includes("email")) {
                                        return <p key={i} className="text-red-500 text-xs mt-1 text-left">{err.message}</p>
                                    }
                                })
                            } */}

              {/* Use .find() to get only the first error for the email field */}
              {error?.find((err) => err.path.includes("email")) && (
                <p className="text-red-500 text-xs mt-1 text-left">
                  {error.find((err) => err.path.includes("email"))?.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <textarea
                placeholder="Message"
                className="textarea textarea-bordered w-full h-32"
                name="message"
                value={newForm.message}
                onChange={handleInputFieldChange}
              ></textarea>
              {error?.map((err, i) => {
                if (err.path.includes("message")) {
                  return (
                    <p key={i} className="text-red-500 text-xs mt-1 text-left">
                      {err.message}
                    </p>
                  );
                }
              })}
            </div>
            <div className="card-actions justify-end mt-2">
              <button
                type="submit"
                className="btn btn-outline w-full  input-bordered  border"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
          <div>
            {/* these messages are coming from server side */}
            {isSuccess && (
              <p className="text-green-500 text-sm mt-1">{data.message}</p>
            )}

            {isError && (
              <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
