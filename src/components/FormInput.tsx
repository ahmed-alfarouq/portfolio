import { Controller, type FieldValues } from "react-hook-form";

import type { FormInputProps } from "@/types";

const FormInput = <T extends FieldValues>({
  control,
  type = "text",
  name,
  label,
  error,
  placeholder,
  required = true,
  disabled,
}: FormInputProps<T>) => {
  const errorId = `${name}-error`;

  return (
    <div className="form-control">
      <label className="label" htmlFor={name} id={`${name}-label`}>
        {label}
        {required && (
          <span className="required-indicator" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            id={name}
            type={type}
            className="input"
            disabled={disabled}
            placeholder={placeholder}
            aria-labelledby={`${name}-label`}
            aria-describedby={error ? errorId : ""}
            aria-invalid={!!error}
            aria-required={required}
          />
        )}
      />

      {error && (
        <span
          id={errorId}
          role="alert"
          className="form-error"
          aria-live="assertive"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default FormInput;
