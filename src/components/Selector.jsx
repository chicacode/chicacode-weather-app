import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const options = [{ name: "Select an option" }, { name: "Hourly" }, { name: "Daily" }];

export const Selector = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <div className="w-full">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-light py-2 pl-3 pr-10 text-left shadow-sm border border-grayDarkOpacity26 focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-gray focus-visible:ring-opacity-75 focus-visible:ring-offset-2">
            <span className="block truncate text-sm">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-primary"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="text-base bg-light rounded-md shadow-lg max-h-60 ring-1 ring-light ring-opacity-10 focus:outline-none sm:text-sm">
              {options.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-gray text-secondary" : "text-primary"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
