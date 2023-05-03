import React, { useState, useCallback } from 'react';

function useInputs<T extends Record<string, any>>(initialForm: T) {
  const [form, setForm] = useState<T>(initialForm);
  const reset = useCallback(() => {
    setForm(initialForm);
  }, [initialForm]);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((preState) => {
      return { ...preState, [name]: value };
    });
  }, []);

  return [form, onChange, reset] as const;
}

export default useInputs;
