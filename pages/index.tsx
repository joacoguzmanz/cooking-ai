import Layout from "@/components/Layout";
import { useState } from "react";

export default function Home() {
    const [input, setInput] = useState('');
    const [recipe, setRecipe] = useState('');
    const [loading, setLoading] = useState(false);

    const generateRecipe = async () => {
        setLoading(true);
        const res = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input })
        })
        const data = await res.json();
        const finalMessage: string = data.message;
        setRecipe(finalMessage);
        setInput('');
        setLoading(false);
    }

  return (
    <>
      <Layout>
          <h1 className='font-medium text-xl mb-2'>Don't know what to cook? 🤔</h1>
          <p>Enter whatever ingredient you have at home and the AI would make a recipe for you!</p>

          <div>
              <textarea
                  onChange={e => setInput(e.target.value)}
                  value={input}
                  rows={4}
                  placeholder='e.g. onions, garlic, pepper and tuna'
                  className='border-2 rounded-lg w-full p-2 mt-4' />
              <button className='bg-[#03913F] text-white text-sm uppercase tracking-wider w-full rounded-lg py-2 mt-2 mb-10' onClick={generateRecipe}>{loading ? <>Loading...</> : <>Generate recipe</>}</button>
          </div>


          <div className='mb-3 text-lg font-medium'>
              <h2>Your recipe</h2>
          </div>


          {recipe && (
              <div className='border-2 rounded-lg px-3 pt-4'>
                  <>
                      <ul>
                          {recipe
                              .substring(recipe.indexOf('1') + 3)
                              .split(/[2-9]+\.\s/)
                              .map((step, index) => {
                                  return (
                                      <li className='mb-5 list-decimal list-inside' key={index}>{step}</li>
                                  )
                              })}
                      </ul>
                  </>
              </div>
          )}
      </Layout>
    </>
  )
}
