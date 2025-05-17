import { supabase } from '@/utils/supabaseClient';

const usePost = (db: string, values: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data, error } = await supabase.from(db).insert(values);

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

export default usePost;
