import React, { useState } from "react";
// tabelka 7-8 pol , laduje sie z backednu bohateroow jak nie ma bohatera to pokazuje albo zablokowane albo pusty slot 



export default function HeroTable() {



  return (
    <div className="h-full w-full flex justify-center items-center p-6 bg-yellow-100">

      {/* Tabela */}

          <table className="w-full h-full table-fixed text-left border-collapse">
            <tr className="min-h-1/2 min-w-full border-gray-300 mb-4">
              <th className="border-2 justify-center items-center">opcja 1</th>
              <th className="border-2 justify-center items-center">opcja 2</th>
              <th className="border-2 justify-center items-center">opcja 3</th>
              <th className="border-2 justify-center items-center">opcja 4</th>
            </tr>
            <tr className="min-h-1/2 min-w-full ">
              <th className="border-2 justify-center items-center">opcja 5</th>
              <th className="border-2 justify-center items-center">opcja 6</th>
              <th className="border-2 justify-center items-center">opcja 7</th>
              <th className="border-2 justify-center items-center">opcja 8</th>
            </tr>

          </table>


    </div>
  );
}
