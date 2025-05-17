import { supabase } from "@/utils/supabaseClient";

const useBusiness = () => {
  const addBusiness = (values: any) => {
    new Promise<void>(async (resolve, reject) => {
      try {
        const { data, error } = await supabase
          .from("Business")
          .insert([values]);

        if (data) {
          resolve(data);
        }

        if (error) throw error;
      } catch (error) {
        reject(error);
      }
    });
  };
  return {
    addBusiness,
  };
};

export default useBusiness;
