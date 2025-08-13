import type { FormTextareaProps } from "@/types";

import { Controller, type FieldValues } from "react-hook-form";

const FormTextarea = <T extends FieldValues>({
  name,
  rows,
  label,
  error,
  control,
  required = true,
  disabled,
  placeholder,
}: FormTextareaProps<T>) => {
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
          <textarea
            {...field}
            id={name}
            rows={rows}
            disabled={disabled}
            className="input resize-none"
            placeholder={placeholder}
            aria-describedby={error ? errorId : undefined}
            aria-labelledby={`${name}-label`}
            aria-invalid={!!error}
            aria-required={required}
          ></textarea>
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

export default FormTextarea;
