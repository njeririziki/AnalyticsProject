import { supabase } from "../utils/supabaseClient";
import { useState, useEffect } from "react";

const useSupabaseAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);
    setLoading(false);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("Auth event:", event);

        // if (event === 'SIGNED_IN') {
        //     setUser(session?.user ?? null);
        // } else if (event === 'SIGNED_OUT') {
        //     setUser(null);
        // }
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return { user, session, loading };
};

const useSupabase = () => {
  const { user, session, loading } = useSupabaseAuth();

  const signIn = async (email: string, password: string) => {
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });
    return { user, error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  return {
    user,
    session,
    loading,
    signIn,
    signOut,
  };
};

export { useSupabaseAuth, useSupabase };
