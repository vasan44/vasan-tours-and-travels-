import React from 'react';

export default function PageLayout({ children, className = '' }) {
  return (
    <div className={`container section ${className}`}>
      {children}
    </div>
  );
}

export function PageSection({ title, subtitle, children, className = '' }) {
  return (
    <div className={`section ${className}`}>
      <div className="container">
        {title && (
          <div className="mb-12 text-center">
            <h2 className="heading-2">{title}</h2>
            {subtitle && <p className="subheading">{subtitle}</p>}
            <div className="divider divider-center"></div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export function TwoColumnLayout({ left, right, className = '' }) {
  return (
    <div className={`flex flex-col lg:flex-row gap-12 ${className}`}>
      <div className="w-full lg:w-2/3">{left}</div>
      <div className="w-full lg:w-1/3">{right}</div>
    </div>
  );
}

export function CardGrid({ children, columns = 3, className = '' }) {
  const gridClass = {
    2: 'grid-2',
    3: 'grid-3',
    4: 'grid-4'
  }[columns] || 'grid-3';

  return (
    <div className={`grid ${gridClass} ${className}`}>
      {children}
    </div>
  );
}

export function Card({ children, className = '' }) {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
}

export function Button({ children, variant = 'primary', size = 'md', block = false, ...props }) {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline'
  }[variant] || 'btn-primary';

  const sizeClass = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg'
  }[size] || '';

  const blockClass = block ? 'btn-block' : '';

  return (
    <button className={`btn ${variantClass} ${sizeClass} ${blockClass}`} {...props}>
      {children}
    </button>
  );
}

export function FormInput({ label, error, success, ...props }) {
  return (
    <div className="form-group">
      {label && <label className="label">{label}</label>}
      <input className="form-input" {...props} />
      {error && <div className="form-error">{error}</div>}
      {success && <div className="form-success">{success}</div>}
    </div>
  );
}

export function FormSelect({ label, options, error, ...props }) {
  return (
    <div className="form-group">
      {label && <label className="label">{label}</label>}
      <select className="form-select" {...props}>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <div className="form-error">{error}</div>}
    </div>
  );
}

export function FormTextarea({ label, error, ...props }) {
  return (
    <div className="form-group">
      {label && <label className="label">{label}</label>}
      <textarea className="form-textarea" {...props}></textarea>
      {error && <div className="form-error">{error}</div>}
    </div>
  );
}
