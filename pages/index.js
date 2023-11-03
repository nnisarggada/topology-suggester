// pages/index.js
import Head from "next/head";
import Questionnaire from "../components/Questionnaire";
import questions from "../data/questions.json";

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Head>
        <title>Network Topology Suggester</title>
      </Head>
      <main className="py-12">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Network Topology Suggester
          </h1>
          <Questionnaire questions={questions} />
        </div>
      </main>
    </div>
  );
};

export default Home;
