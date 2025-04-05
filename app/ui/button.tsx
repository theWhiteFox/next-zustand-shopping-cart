import clsx from 'clsx'

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: React.ReactNode | ((props: { disabled: boolean; hover: boolean; focus: boolean; active: boolean; autofocus: boolean }) => React.ReactNode)
}

export function Button(
  { children, className, type = 'button', ...rest }: ButtonProps) {

  return (
    <button
      type={type}
      {...rest}
      className={clsx(
        'flex h-10 w-full items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className
      )}
    >
      {typeof children === 'function' ? children({
        disabled: false,
        hover: false,
        focus: false,
        active: false,
        autofocus: false
      }) : children}
    </button>
  )
}
