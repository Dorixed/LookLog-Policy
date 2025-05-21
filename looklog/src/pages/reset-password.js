import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';

function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const [token, setToken] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tokenFromUrl = params.get('token');
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    } else {
      setMessage('无效的重置链接：缺少令牌。');
      setMessageType('error');
    }
  }, [location.search]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(null);
    setMessageType('');

    if (newPassword !== confirmPassword) {
      setMessage('新密码和确认密码不匹配。');
      setMessageType('error');
      return;
    }

    if (!token) {
      setMessage('无效的重置链接或令牌丢失。');
      setMessageType('error');
      return;
    }

    try {
      // 您的后端API地址，确保端口与server.js中的一致
      const response = await fetch(`http://39.105.202.29:3000/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setMessage('密码已成功重置！');
        setMessageType('success');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setMessage(result.message || '密码重置失败，请稍后再试。');
        setMessageType('error');
      }
    } catch (error) {
      console.error('重置密码请求失败:', error);
      setMessage('请求失败，请检查网络连接或联系管理员。');
      setMessageType('error');
    }
  };

  // 简单内联样式，您可以后续根据 Docusaurus 主题进行调整
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '50px auto',
      padding: '20px 40px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      color: '#555',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      boxSizing: 'border-box',
    },
    button: {
      width: '100%',
      padding: '10px 15px',
      backgroundColor: 'var(--ifm-color-primary)', // 使用Docusaurus主题颜色
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    message: {
      marginTop: '20px',
      padding: '10px',
      borderRadius: '4px',
      textAlign: 'center',
    },
    successMessage: {
      backgroundColor: '#d4edda',
      color: '#155724',
      border: '1px solid #c3e6cb',
    },
    errorMessage: {
      backgroundColor: '#f8d7da',
      color: '#721c24',
      border: '1px solid #f5c6cb',
    },
    title: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '20px'
    }
  };

  return (
    <Layout title="重置密码" description="重置您的账户密码">
      <div style={styles.container}>
        <h2 style={styles.title}>重置您的密码</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="newPassword" style={styles.label}>新密码:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="confirmPassword" style={styles.label}>确认新密码:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>重置密码</button>
        </form>
        {message && (
          <div
            style={{
              ...styles.message,
              ...(messageType === 'success' ? styles.successMessage : styles.errorMessage),
            }}
          >
            {message}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default ResetPasswordPage;