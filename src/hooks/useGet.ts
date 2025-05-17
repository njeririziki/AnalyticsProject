import { supabase } from '@/utils/supabaseClient';

const useGet = (db: string, business_id: number) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data, error } = await supabase
        .from(db)
        .select()
        .eq("business_id", business_id);

      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    } catch (error) {
      alert(error + " Please try again");
    }
  });
};

export default useGet;
