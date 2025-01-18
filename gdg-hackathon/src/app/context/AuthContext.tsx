import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  id: string | null;
  setId: (id: string) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [id, setId] = useState<string | null>(null); // 전역적으로 관리할 ID 상태
  
  return (
    <AuthContext.Provider value={{ id, setId }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook으로 Context 쉽게 사용
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
