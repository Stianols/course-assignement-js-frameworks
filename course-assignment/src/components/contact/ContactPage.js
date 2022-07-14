import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Heading from "../layout/Heading";

const schema = yup.object().shape({
    firstName: yup.string().required("Please enter your first name").min(3, "Your first name must be at least 3 characters"),
    lastName: yup.string().required("Please enter your last name").min(4, "Your first name must be at least 4 characters"),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    subject: yup.string().required(),
    message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters")
});

function ContactForm() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <>
        <Heading title="Contact" />
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} placeholder="First name" />
            {errors.firstName && <span>{errors.firstName.message}</span>}

            <input {...register("lastName")} placeholder="Last name" />
            {errors.lastName && <span>{errors.lastName.message}</span>}

            <input {...register("email")} placeholder="Email" />
            {errors.email && <span>{errors.email.message}</span>}

            <label>Subject</label>
                <select
                {...register("subject")}
                onChange={(e) => setValue('subject', e.target.value, { shouldValidate: true })}>
                    <option value="lorem">Lorem</option>
                    <option value="ipsum">Ipsum</option>
                </select>
            {errors.subject && <span>{errors.subject.message}</span>}

            <textarea {...register("message")} placeholder="Your message" />
            {errors.message && <span>{errors.message.message}</span>}

            <button>Send</button>
        </form>
        </>
    );
}

export default ContactForm;