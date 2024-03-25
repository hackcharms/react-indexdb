import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITodo } from "../types";
export default function TodoDetails() {
  const [cardDetails, setCardDetails] = useState<ITodo>();
  const { id } = useParams();
  useEffect(() => {
    setTimeout(() => {
      const db = window.db as IDBDatabase;
      const transaction = db?.transaction(["todoSchema"], "readwrite");
      if (transaction) {
        console.log("transaction.oncomplete");
        const objectStore = transaction?.objectStore("todoSchema");
        console.log("objectStore", objectStore);
        if (transaction && id)
          objectStore.get(Number(id)).onsuccess = function (event: Event) {
            console.log("event?.target", event?.target);
            setCardDetails(event?.target?.result);
          };
        //   transaction.oncomplete = () => {
        //   };
        console.log("transaction avaiable now", transaction);
      } else {
        console.log("transaction not avaiable", transaction);
      }
      // transaction.oncomplete=(){}
    }, 100);
  }, []);
  return (
    <div className="relative flex flex-col rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-md">
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          #{cardDetails?.id}
        </h5>
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {cardDetails?.title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {cardDetails?.description}
        </p>
        <p className="block font-sans text-xs font-light leading-relaxed text-inherit antialiased">
          created At {cardDetails?.createdAt}
        </p>
      </div>
    </div>
  );
}
