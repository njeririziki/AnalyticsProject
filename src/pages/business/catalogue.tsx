import HeaderSiderLayout from "@/components/layouts/HeaderSiderLayout";
import SearchableTable from "@/components/reusable/Table";
import { AuthContext } from "@/context/AuthContext";
import useGet from "@/hooks/useGet";
import { ColumnsType } from "antd/es/table";
import { useContext, useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import { set } from "react-hook-form";

type DataType = {
  id: number;
  name: string;
  retail_price: number;
  stock: number;
  cost_price: number;
  value: number;
  created_at: Date;
};

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",

  },
  {
    title: "Retail Price",
    dataIndex: "retail_price",
    key: "retail_price",
    //   width: '20%',
    //...getColumnSearchProps('age'),
  },
  {
    title: "Cost Price",
    dataIndex: "cost_price",
    key: "cost_price",

  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",

  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
    
  },
];

const CataloguePage = () => {
  const { currentUser } = useContext(AuthContext);

  const [productList, setProductList] = useState<DataType[]>([]);
  const user_id = currentUser?.id; // currentUser?.id

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("Catalogue").select("*");
      console.log({ data, error });
      setProductList(data ?? []);
      if (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <HeaderSiderLayout>
      <div className="w-5/6  pt-8 h-full ">
        <h2 className="font-semibold text-lg text-black"> Products </h2>
        <div className="pt-8">
          <SearchableTable data={productList} columns={columns} />
        </div>
      </div>
    </HeaderSiderLayout>
  );
};
export default CataloguePage;
