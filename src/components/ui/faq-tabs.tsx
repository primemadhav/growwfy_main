import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { cn } from '../../lib/utils';

// FAQ data structures interfaces
export interface FAQItemType {
  question: string;
  answer: string;
}

export interface FAQProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  categories: Record<string, string>;
  faqData: Record<string, FAQItemType[]>;
  className?: string;
}

// Main reusable FAQ component
export const FAQ = ({ 
  title = "FAQs",
  subtitle = "Frequently Asked Questions",
  categories,
  faqData,
  className,
  ...props 
}: FAQProps) => {
  const categoryKeys = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);

  return (
    <section 
      className={cn(
        "relative overflow-hidden bg-white dark:bg-zinc-950 px-4 py-16 sm:py-20 text-zinc-900 dark:text-zinc-100 border-t border-zinc-150 dark:border-zinc-900/50",
        className
      )}
      {...props}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <FAQHeader title={title} subtitle={subtitle} />
        
        <div className="mt-10">
          <FAQTabs 
            categories={categories}
            selected={selectedCategory} 
            setSelected={setSelectedCategory} 
          />
        </div>
        
        <FAQList 
          faqData={faqData}
          selected={selectedCategory} 
        />
      </div>
    </section>
  );
};

interface FAQHeaderProps {
  title: string;
  subtitle: string;
}

const FAQHeader = ({ title, subtitle }: FAQHeaderProps) => (
  <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
    <span className="mb-3 inline-flex items-center space-x-1.5 rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-[10px] text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-semibold">
      {subtitle}
    </span>
    <h2 className="mb-4 font-display text-3xl font-medium tracking-tight text-zinc-900 dark:text-white sm:text-4xl leading-tight">
      {title}
    </h2>
    <span className="absolute -top-[250px] left-[50%] z-0 h-[400px] w-[500px] -translate-x-[50%] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-3xl pointer-events-none" />
  </div>
);

interface FAQTabsProps {
  categories: Record<string, string>;
  selected: string;
  setSelected: (key: string) => void;
}

const FAQTabs = ({ categories, selected, setSelected }: FAQTabsProps) => (
  <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto px-2">
    {Object.entries(categories).map(([key, label]) => (
      <button
        key={key}
        onClick={() => setSelected(key)}
        className={cn(
          "relative overflow-hidden whitespace-nowrap rounded-lg border px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer shadow-sm select-none",
          selected === key
            ? "border-emerald-500 text-white"
            : "border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700"
        )}
      >
        <span className="relative z-10">{label}</span>
        <AnimatePresence mode="popLayout">
          {selected === key && (
            <motion.span
              layoutId="faq-tab-background"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600"
            />
          )}
        </AnimatePresence>
      </button>
    ))}
  </div>
);

interface FAQListProps {
  faqData: Record<string, FAQItemType[]>;
  selected: string;
}

const FAQList = ({ faqData, selected }: FAQListProps) => (
  <div className="mx-auto mt-10 max-w-3xl px-2">
    <AnimatePresence mode="wait">
      {Object.entries(faqData).map(([category, questions]) => {
        if (selected === category) {
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="space-y-3"
            >
              {questions.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </motion.div>
          );
        }
        return null;
      })}
    </AnimatePresence>
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string; key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className={cn(
        "rounded-xl border transition-all duration-300 overflow-hidden",
        isOpen 
          ? "bg-zinc-50/80 dark:bg-zinc-900/30 border-emerald-500/20 shadow-sm" 
          : "bg-zinc-50/30 dark:bg-zinc-900/10 border-zinc-200/60 dark:border-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-800"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-4 text-left cursor-pointer select-none"
      >
        <span
          className={cn(
            "text-xs sm:text-sm font-semibold transition-colors duration-200",
            isOpen ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-800 dark:text-zinc-200"
          )}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: { rotate: "45deg" },
            closed: { rotate: "0deg" },
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "shrink-0 rounded-full p-1 border transition-colors",
            isOpen 
              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400" 
              : "bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-500"
          )}
        >
          <Plus className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </motion.span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1">
              <p className="text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
