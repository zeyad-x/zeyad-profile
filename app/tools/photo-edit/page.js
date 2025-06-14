"use client";

import React, { useRef, useState } from 'react';

const PhotoEditor = () => {
    const imageRef = useRef(null);
    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);
    const [downloadUrl, setDownloadUrl] = useState("");
    const [filters, setFilters] = useState({
        saturate: 100,
        contrast: 100,
        brightness: 100,
        sepia: 0,
        grayscale: 0,
        blur: 0,
        hueRotate: 0
    });

    const applyFilters = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const image = imageRef.current;

        ctx.filter = `
            saturate(${filters.saturate}%)
            contrast(${filters.contrast}%)
            brightness(${filters.brightness}%)
            sepia(${filters.sepia}%)
            grayscale(${filters.grayscale})
            blur(${filters.blur}px)
            hue-rotate(${filters.hueRotate}deg)
        `;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            const image = imageRef.current;
            image.src = reader.result;
            image.onload = () => {
                const canvas = canvasRef.current;
                canvas.width = image.width;
                canvas.height = image.height;
                applyFilters();
            };
        };
        reader.readAsDataURL(file);
    };

    const handleFilterChange = (e) => {
        const { id, value } = e.target;
        setFilters(prev => ({ ...prev, [id]: value }));
    };

    const resetFilters = () => {
        setFilters({
            saturate: 100,
            contrast: 100,
            brightness: 100,
            sepia: 0,
            grayscale: 0,
            blur: 0,
            hueRotate: 0
        });
        applyFilters();
    };

    const clearImage = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        imageRef.current.src = "";
        setDownloadUrl("");
        resetFilters();
    };

    const downloadImage = () => {
        const canvas = canvasRef.current;
        canvas.toBlob(blob => {
            const url = URL.createObjectURL(blob);
            setDownloadUrl(url);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'edited-image.png';
            link.click();
            URL.revokeObjectURL(url);
        });
    };

    return (
        <div style={{
            fontFamily: "'Poppins', sans-serif",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            margin: 0,
            padding: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "95%",
                maxWidth: "1200px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                padding: "30px"
            }}>
                <h1 style={{
                    color: "white",
                    textAlign: "center",
                    marginBottom: "30px",
                    fontSize: "2.5rem",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.2)"
                }}>Photo Editor</h1>
                
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "30px",
                    flexWrap: "wrap"
                }}>
                    {/* Image Section */}
                    <div style={{
                        flex: "1 1 500px",
                        padding: "20px",
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "15px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "20px"
                    }}>
                        <div style={{
                            width: "100%",
                            minHeight: "400px",
                            background: "rgba(0, 0, 0, 0.2)",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative"
                        }}>
                            <img ref={imageRef} alt="" style={{
                                maxWidth: "100%",
                                maxHeight: "400px",
                                borderRadius: "10px",
                                display: filters.src ? 'block' : 'none'
                            }} />
                            <canvas ref={canvasRef} style={{
                                maxWidth: "100%",
                                maxHeight: "400px",
                                borderRadius: "10px"
                            }} />
                        </div>
                        
                        <div style={{
                            display: "flex",
                            gap: "15px",
                            justifyContent: "center",
                            width: "100%"
                        }}>
                            <input type="file" ref={fileInputRef} accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />
                            <button onClick={() => fileInputRef.current.click()} style={{
                                padding: "12px 24px",
                                background: "linear-gradient(45deg, #4CAF50, #45a049)",
                                color: "white",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontWeight: "600",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 15px rgba(76, 175, 80, 0.3)",
                                transform: "translateY(0)",
                                ':hover': {
                                    transform: "translateY(-3px)",
                                    boxShadow: "0 8px 20px rgba(76, 175, 80, 0.4)"
                                },
                                ':active': {
                                    transform: "translateY(1px)"
                                }
                            }}>Upload Image</button>
                            <button onClick={clearImage} style={{
                                padding: "12px 24px",
                                background: "linear-gradient(45deg, #ff4b4b, #ff3333)",
                                color: "white",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontWeight: "600",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 15px rgba(255, 75, 75, 0.3)",
                                transform: "translateY(0)",
                                ':hover': {
                                    transform: "translateY(-3px)",
                                    boxShadow: "0 8px 20px rgba(255, 75, 75, 0.4)"
                                },
                                ':active': {
                                    transform: "translateY(1px)"
                                }
                            }}>Clear</button>
                        </div>
                    </div>

                    {/* Controls Section */}
                    <div style={{
                        flex: "1 1 300px",
                        padding: "25px",
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "15px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px"
                    }}>
                        {["saturate", "contrast", "brightness", "sepia", "grayscale", "blur", "hueRotate"].map(filter => (
                            <div key={filter} style={{
                                background: "rgba(255, 255, 255, 0.1)",
                                padding: "15px",
                                borderRadius: "10px"
                            }}>
                                <label htmlFor={filter} style={{
                                    color: "white",
                                    fontSize: "14px",
                                    display: "block",
                                    marginBottom: "8px",
                                    textTransform: "capitalize"
                                }}>{filter}</label>
                                <input
                                    type="range"
                                    id={filter}
                                    min={filter === "grayscale" ? "0" : "0"}
                                    max={filter === "grayscale" ? "1" : filter === "blur" ? "10" : filter === "hueRotate" ? "350" : "200"}
                                    value={filters[filter]}
                                    step={filter === "grayscale" ? "0.1" : "1"}
                                    onChange={handleFilterChange}
                                    onMouseUp={applyFilters}
                                    style={{
                                        width: "100%",
                                        height: "6px",
                                        WebkitAppearance: "none",
                                        background: "rgba(255, 255, 255, 0.2)",
                                        borderRadius: "3px",
                                        cursor: "pointer"
                                    }}
                                />
                            </div>
                        ))}

                        <div style={{
                            display: "flex",
                            gap: "15px",
                            marginTop: "20px"
                        }}>
                            <button onClick={downloadImage} style={{
                                flex: 1,
                                padding: "12px",
                                background: "linear-gradient(45deg, #2196F3, #1976D2)",
                                color: "white",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontWeight: "600",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 15px rgba(33, 150, 243, 0.3)",
                                transform: "translateY(0)",
                                ':hover': {
                                    transform: "translateY(-3px)",
                                    boxShadow: "0 8px 20px rgba(33, 150, 243, 0.4)"
                                },
                                ':active': {
                                    transform: "translateY(1px)"
                                }
                            }}>Download</button>
                            <button onClick={resetFilters} style={{
                                flex: 1,
                                padding: "12px",
                                background: "linear-gradient(45deg, #9C27B0, #7B1FA2)",
                                color: "white",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontWeight: "600",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 15px rgba(156, 39, 176, 0.3)",
                                transform: "translateY(0)",
                                ':hover': {
                                    transform: "translateY(-3px)",
                                    boxShadow: "0 8px 20px rgba(156, 39, 176, 0.4)"
                                },
                                ':active': {
                                    transform: "translateY(1px)"
                                }
                            }}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoEditor;
