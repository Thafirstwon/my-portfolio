import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import NewUpdatePage from "./NewUpdatePage";
import Solo from "./Solo";
import Mozart from "./Mozart";


const notesData = {
      "new-portfolio-next-chapter": {
    component: <NewUpdatePage />,
  },
  "solo-developer":{
    component: <Solo />
  },
  "new-client-moses-adegunle":{
    component: <Mozart />
  }

}

const NoteDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const note = location.state?.note;
   const customNote = notesData[slug]

   if (customNote) {
    // ✅ Render the unique page layout
    return customNote.component;
  }


  if (!note) {
    return (
      <div className="text-center text-white py-40 overflow-hidden">
        <p>Note not found.</p>
        <Link
          to="/notes"
          className="underline text-gray-300 hover:text-white mt-4 block"
        >
          Back to all notes
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#0d0e0f] text-black dark:text-white min-h-screen px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/notes"
          className="underline text-gray-300 hover:text-white mb-6 inline-block"
        >
          ← Back to Notes
        </Link>

        <img
          src={note.img}
          alt={note.title}
          className="w-full h-[500px] object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">{note.title}</h1>
        <p className="text-gray-400 mb-8">
          {note.category} — {note.date}
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          eros vel nisl malesuada ultrices. Duis ut lacus quis justo ultricies
          convallis. Suspendisse potenti. Integer non pretium nibh, vel
          efficitur nisl.
        </p>
      </div>
    </div>
  );
};

export default NoteDetail;


