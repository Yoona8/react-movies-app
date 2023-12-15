import { ReactNode } from 'react';

import './dialog.css';

interface IDialogProps {
  children: ReactNode,
  onClose: () => void,
  title?: string,
  isOpen?: boolean,
}

export function Dialog({
  title,
  isOpen = false,
  children,
  onClose,
  ...props
}: IDialogProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <article className="dialog" {...props}>
      <header className="dialog__header">
        <button
          className="dialog__close"
          type="button"
          aria-label="Close"
          onClick={() => {onClose()}}
        />
        <h2 className="dialog__title">{title}</h2>
      </header>
      <div className="dialog__content">{children}</div>
    </article>
  );
}
