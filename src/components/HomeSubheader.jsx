import React from "react";
import gpt from "../assets/gpt.png";
import Prism from "prismjs";
import gptwhite from "../assets/gptwhite.png";
const HomeSubheader = () => {
  return (
    <div className=" flex justify-center px-48 h-96 w-screen container">
      <div className="h-full rounded-lg">
        <ul className="p-4 xxs:w-screen lg:w-full rounded-lg space-y-2 mb-28 shadow-2xl shadow-blue-300">
          <li>
            <div className="flex items-center bg-secondary rounded-lg p-1 h-full">
              <img src={gpt} className="w-10" />
              <h1 className="text-white font-semibold">
                Can you show how can I declare variable in JavaScript
              </h1>
            </div>
          </li>
          <li>
            <div>
              <div>
                <div className="flex items-center space-x-2">
                  <img src={gptwhite} className="rounded-full w-8" />
                  <h1 className="text-white text-sm">
                    Sure! In JavaScript, you can declare variables using the
                    'var','let',or 'const' keywords, Here are a few examples:
                    Using 'var':
                  </h1>
                </div>
              </div>
              <div className="bg-secondary rounded-lg font-sub">
                <pre className="language-javascript">
                  <code className="text-sm">
                    <h1>javascript</h1>
                    <h1>var age = 25;</h1>
                    <h1>var name = "John";</h1>
                    <h1>var isStudent = true;</h1>
                  </code>
                </pre>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div>
                <div className="flex items-center space-x-2">
                  <img src={gptwhite} className="rounded-full w-8" />
                  <h1 className="text-white text-sm">Using 'let':</h1>
                </div>
              </div>
              <div className="bg-secondary rounded-lg font-sub">
                <pre className="language-javascript">
                  <code className="text-sm">
                    <h1>javascript</h1>
                    <h1>let age = 25;</h1>
                    <h1>let name = "John";</h1>
                    <h1>let isStudent = true;</h1>
                  </code>
                </pre>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div>
                <div className="flex items-center space-x-2">
                  <img src={gptwhite} className="rounded-full w-8" />
                  <h1 className="text-white text-sm">Using 'const':</h1>
                </div>
              </div>
              <div className="bg-secondary rounded-lg font-sub">
                <pre className="language-javascript">
                  <code className="text-sm">
                    <h1>javascript</h1>
                    <h1>const age = 25;</h1>
                    <h1>const name = "John";</h1>
                    <h1>const isStudent = true;</h1>
                  </code>
                </pre>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div>
                <div className="flex items-center space-x-2">
                  <img src={gptwhite} className="rounded-full w-8" />
                  <p className="text-white text-sm">
                    var is function-scoped, hoisted, and allows redeclaration
                    and reassignment. let is block-scoped, not hoisted, and
                    permits reassignment but prevents redeclaration in the same
                    scope. const is also block-scoped, not hoisted, and allows
                    assignment only at declaration, after which it cannot be
                    reassigned, though for objects and arrays, their properties
                    or elements can still be modified.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div></div>
      </div>
    </div>
  );
};

export default HomeSubheader;
